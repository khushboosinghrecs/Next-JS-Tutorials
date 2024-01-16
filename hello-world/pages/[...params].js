import { useRouter } from "next/router"

export default function Docs() {
    const router = useRouter()
    const { params =[]} = router.query;
    console.log(params);

    // if (params && params.length >0 && params.length == 2) {
    //     return <div> viewing docs for {params[0]} and {params[1]} </div>
    // } else if (params.length == 1) {
    //     return <div>viewing params length of 1 in doc {params[0]}</div>
    // }
    return <>
        docs file
    </>
}