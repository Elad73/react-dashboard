import { useState } from "react";
import QueryBuilder, { formatQuery, RuleGroupType } from "react-querybuilder";
import CombinatorSelector from "./CombinatorSelector";
import fields from "../fields";
import getOperators from "../getOperators";
import ValueEditor from '../ValueEditor';
import valueProcessor from '../valueProcessor';

function Builder() {
    const [query, setQuery] = useState<RuleGroupType>({
        id: 'root',
        combinator: 'and',
        rules: [],
    });

    const [rawData, setRawData] = useState<any[]>([]);
    const getData = async () => {
        const body = JSON.stringify(query);
        const headers = new Headers({ 'Content-Type': 'application/json' });

        let res: { data: any[]; chartData: any[]; error?: string } = {
            data: [],
            chartData: [],
        };

        try {
            res = await (
                await fetch('api/v1/reports/performance', { method: 'GET', headers })
            ).json();
        } catch (err) {
            console.log('getData err: ' + err);
        }

        if (res.error) {
            console.log('res.error: ' + res.error);
        } else {
            setRawData(res.data);
        }
    };
    
    return (
        <div className='builder'>
                <QueryBuilder
                    fields={fields}
                    query={query}
                    onQueryChange={(q) => setQuery(q)}
                    getOperators={getOperators}
                    controlElements={{
                        //addGroupAction: () => null,
                        combinatorSelector: CombinatorSelector,
                        valueEditor: ValueEditor,
                    }}
                />
                <button onClick={getData}>Get Data</button>
                <div className='builder-card'>
                    <div className='builder-card__heading'>
                        {formatQuery(query, { format: 'sql', valueProcessor })}
                    </div>
                </div>
                <div className='builder-card'>
                    <div className='builder-card__updates'>
                        {formatQuery(query, 'json')}
                    </div>
                </div>
            </div>
    );
}

export default Builder;