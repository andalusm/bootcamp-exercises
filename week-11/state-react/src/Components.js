
export function Hudini(props){

    return (
        <div>
            {props.show ? "Now you see me" : "Now you don't"}
        </div>
    )
} 

export function Landing(props){
    const hottestItem = props.store.store.find(i=> i.hottest === true)
    return (
        <div>
            Welcome, {props.store.user}
            The hottest item is {hottestItem.item} for ${hottestItem.price}.
        </div>
    )
}

function Item(props){
    return(
        <div>
            {props.item}: ${props.price}
        </div>
    )

}

export function Home(props){
    return(
        <div>
             <h4>Store</h4>

            {props.store.store.map(i=> <Item item={i.item} price={props.store.shouldDiscount ? i.price*(1-i.discount): i.price}></Item>)}
        </div>
    )

}
