import React from 'react';
import './App.css';

export default function BommerFormResultBox(props) {

    return (

        <div id="result_box">
            <table>
                <tr>
                    <td>
                        <b>Text:</b>
                    </td>
                    <td>{props.resultData.textInput}</td>
                </tr>
                <tr>
                    <td>
                        <b>Email:</b>
                    </td>
                    <td>{props.resultData.emailInput}</td>
                </tr>
                <tr>
                    <td>
                        <b>Magic Number:</b>
                    </td>
                    <td>{props.resultData.numbertInput}</td>
                </tr>
                <tr>
                    <td>
                        <b>Bird:</b>
                    </td>
                    <td>{props.resultData.birdInput}</td>
                </tr>
            </table>
        </div>
    );
}
