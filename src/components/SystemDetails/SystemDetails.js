import React from 'react';
import {
    useParams
} from "react-router-dom";
import {Buffer} from 'buffer';

function SystemDetails() {
    const { encoded_string } = useParams();
    let base64ToString = Buffer.from(encoded_string, "base64").toString();
    var information_json = JSON.parse(base64ToString.replace(/'/g, '"'));

    return (
        <table>
            <tbody id="tbody">
            {
                Object.entries(information_json).map(([key, value]) => ( 
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{information_json[key]}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default SystemDetails;