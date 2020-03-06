import React, { Component } from "react";
import "./indes.css";
import { Row, Col, Table } from "reactstrap";
import { FiCheck, FiX } from "react-icons/fi";

export default class Price extends Component {
    render() {
        return (
            <>
                <div className="justify-content-center align-content-center my-5 py-5" id="price">
                    <Row className="justify-content-center">
                        <Col sm="12" md="6" lg="6" className="justify-content-center">
                            <Row className="justify-content-center">
                                <Col sm="6" md="6" lg="6" className="justify-content-center">
                                    <Row className="justify-content-center">
                                        <Col sm="6" md="6" lg="6" className="justify-content-center">
                                            <h2>Prices</h2>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm="12" md="9" lg="9" className="justify-content-center">
                            <Table responsive hover striped borderless>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>FREE</th>
                                        <th>SILVER</th>
                                        <th>GOLD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">MOT</th>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">MOT History</th>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TAX</th>
                                        <td><FiCheck color="green" size={25} /></td>
                                        <td><FiCheck color="green" size={25} /></td>
                                        <td><FiCheck color="green" size={25}/></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Vehical Age</th>
                                        <td><FiCheck color="green" size={25} /></td>
                                        <td><FiCheck color="green" size={25} /></td>
                                        <td><FiCheck color="green" size={25}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mileage Estimate</th>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Imported </th>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Exported</th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">V5C Count</th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">DVLA Vehical Specification</th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Running Cost </th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Economic and environmental details</th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiCheck color="green" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Performance Data </th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Valuation</th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiX color="red" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Write off</th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiX color="red" size={40} /></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Mileage check</th>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiX color="red" size={40}/></td>
                                        <td><FiCheck color="green" size={40}/></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">TOTAL</th>
                                        <td>FREE</td>
                                        <td>£200</td>
                                        <td>£400</td>
                                    </tr>
                                </tbody>
                           </Table>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}