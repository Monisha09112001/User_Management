import { HeaderTypes } from "./Header.types"

export const PageHeader=({heading}:HeaderTypes)=>
{
    return(
        <section>
            <div>
                <p>{heading}</p>
            </div>
        </section>
    )
}