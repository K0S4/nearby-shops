import {API_HOST} from "../../API_HOST";
import {useEffect, useState} from "react";

export function useShopsData() {
    const [shopsData, setShopsData] = useState(undefined);

    useEffect(() => {
        getShopsData();
    }, []);

    function getShopsData() {
        fetch(`${API_HOST}`).then(response => response.json()).then(body => {
                setShopsData(body);
            }
        ).catch(error => {
            console.log(error);
        });
    }

    return shopsData;
}
