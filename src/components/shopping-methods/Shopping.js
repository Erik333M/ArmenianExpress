import React from 'react'
import Flags from 'country-flag-icons/react/3x2'
import { FaPlane } from 'react-icons/fa';
import { RiShipFill } from 'react-icons/ri';
import "./Shopping.css"

const Shopping = () => {
    return (
        <div className="shopping">
            <h1>SHOPPING METHODS AND PRICES TO ARMENIA</h1>
            <p style={{textAlign:"center"}}>Due to the increase in cargo transportation prices, starting from 21.03 for incoming parcels at warehouses the mentioned tariffs will be enacted.</p>
            <table>
                <thead>
                    <tr class="price-table-header">
                        <th>Country</th>
                        <th>Delivery time</th>
                        <th>Minimum</th>
                        <th>Volumetric weight</th>
                        <th>Price (1kg)</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>
                            <Flags.US className="flag" />
                        USA (shipping by air)                    </td>
                        <td><FaPlane /> 5 - 9 working days</td>
                        <td><i></i></td>
                        <td><i></i> <small>If there is no super volumetric weight</small></td>
                        <td>
                            <span>6.000amd</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Flags.US className="flag" />
                        USA (shipping by sea)                    </td>
                        <td><RiShipFill /> 2 - 3 months </td>
                        <td>
                            up to 10 kg – 15.000 amd<br />
                        </td>
                        <td><i ></i></td>
                        <td>
                            <span >1.500amd</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Flags.RU className="flag" />
                        Russia (shipping by air)                    </td>
                        <td>
                            <FaPlane />
                        2 - 5 working days                    </td>
                        <td>up to 0.5 kg – 1.000 amd</td>
                        <td><i class="fa fa-times"></i> <small>If there is no super volumetric weight</small></td>
                        <td><span class="price">2.000amd</span></td>
                    </tr>

                    <tr>
                        <td><Flags.RU className="flag" />
                        RUSSIA (shipping by ground)</td>
                        <td class="text-center"><FaPlane />
                        5 - 10 working days</td>
                        <td class="text-center">up to 4 kg – 4.000 drams</td>
                        <td class="text-center"><i class="fa fa-times"></i>
                            <small>If there is no super volumetric weight</small></td>
                        <td class="text-center">1.000amd</td>
                    </tr>

                    <tr>
                        <td>
                            <Flags.GB className="flag" />
                        United Kingdom                    </td>
                        <td>
                            <FaPlane />
                        5 - 10 working days                    </td>
                        <td><i class="fa fa-times"></i></td>
                        <td>
                            <i class="fa fa-times"></i> <small>If there is no super volumetric weight</small></td>
                        <td>
                            <span class="price">6.000amd</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Flags.CN className="flag" />
                        China (shipping by air)                    </td>
                        <td>
                            <FaPlane />
                        5 - 10 working days </td>
                        <td><i class="fa fa-times"></i></td>
                        <td><i class="fa fa-times"></i> <small>If there is no super volumetric weight</small></td>
                        <td>
                            <p class="min_weight">parcel weighing 3 kg &amp; more -<br />
                            7.850 amd                        </p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Flags.CN className="flag" />
                        China (shipping by sea)                    </td>
                        <td><RiShipFill /> ≈ 2.5 months</td>
                        <td>
                            up to 1 kg – 1.500 amd<br />
                        </td>
                        <td><i class="fa fa-check"></i></td>
                        <td>
                            <span class="price">1.500amd</span>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Flags.AE className="flag" />
                        Dubai                    </td><td>
                            <FaPlane /> 4 - 8 working days                    </td>
                        <td><i class="fa fa-times"></i></td>
                        <td>
                            <i class="fa fa-times"></i><small> If there is no super volumetric weight</small>
                        </td>
                        <td>
                            <span class="price">5.000amd</span>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Shopping