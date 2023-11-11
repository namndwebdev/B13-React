export default function Child(props){
    var person = {
        name: 'Quan',
        age: 20,
        money: 1000
    }

    var check = false

    var block1 = (
        <div>
            Block1
        </div>
    )

    var block2 = (
        <div>
            Block2
        </div>
    )

    return (
        <>
           {check ? block1 : null}
        </>
    )
}