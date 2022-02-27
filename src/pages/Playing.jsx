import {useParams} from 'react-router-dom'


export function Playing(){
    
    const rule = useParams()
    console.log(rule)

    return(
        <section className="playing">
            <h1>Game On</h1>
        </section>
    )
}