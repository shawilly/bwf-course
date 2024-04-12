import { useEffect, useState } from "react";

export const Hero = () => {
    const [apiResponse, setApiResponse] = useState<Record<string, any>>();

    useEffect(()=> {
        const getData = async () => {
            let res: Response | undefined = undefined;

            try{
             res = await fetch('http://127.0.0.1:8000/api/groups');
            } catch (error) {
                console.error(error)
            }

            if(!res || res.status !== 200){
                throw new Error(`Error: ${res && res.status ? `status code ${res.status}` : 'failed to get response.'}`)
            }

            const data = res.json();
            
            console.log(data)
            setApiResponse(data);
        }

        getData();
    }, []);

    return (<div className="flex flex-col justify-center items-center">
        {JSON.stringify(apiResponse)}
    </div>)
}