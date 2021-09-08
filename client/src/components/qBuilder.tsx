import { useState } from "react";
import QueryBuilder, { formatQuery, RuleGroupType } from "react-querybuilder";
import CombinatorSelector from "./CombinatorSelector";
import fields from "../fields";
import getOperators from "../getOperators";

function Builder() {
    const [query, setQuery] = useState<RuleGroupType>({
        id: "root",
        combinator: "and",
        rules: [],
    });
    
    return (
        <>
            <div className='builder border'>
                <QueryBuilder
                    fields={fields}
                    query={query}
                    onQueryChange={(q) => setQuery(q)}
                    getOperators={getOperators}
                    controlElements={{
                        //addGroupAction: () => null,
                        combinatorSelector: CombinatorSelector,
                    }}
                />
                <div className="builder-card">
                    <div className="builder-card__heading">{formatQuery(query, "sql")}</div>
                </div>
                <div className="builder-card">
                    <div className="builder-card__updates">{formatQuery(query, "json")}</div>
                </div>
            </div>
        </>
    );
}

export default Builder;