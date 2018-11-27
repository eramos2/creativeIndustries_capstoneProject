<template>
<div class="container contentContainer addMarginTop">

    <div class="row">

        <div class="col-md-12 cpl-md-offset-4" id="topRow">

            <h2><span class="glyphicon glyphicon-minus-sign addMarginTop"></span> Remove Business </h2>

            <p class="lead">Select the business you want to remove from the system.</p>

            <div class="row">
                <table class="table table-striped table-hover tableContainer" id="removBsnTable">
                    <thead>
                    <tr><th></th>
                    <th data-field="name" data-sortable="true">Business</th>
                    <th data-field="description" data-sortable="true">Description</th>
                    <th data-field="city" data-sortable="true">City</th>
                    </tr></thead>
                    <tbody id="businessList"><tr><td id="10"><input type="checkbox"  v-model="rbids" value="Caribbean Cast Stone"></td><td>Caribbean Cast Stone</td><td>For more than 20 years Caribbean Cast Stone has participated in numerous projects using exclusive pieces of concrete prefabricated through all Puerto Rico and the Caribbean. Cast Stone is a product based on specific kits ranging from the traditional to the modern contemporary style. Easy to install and extremely durable. The designs come in variety of colors, sizes and dimensions. Our products are manufactured through a process of manufacturing quality and excellence by highly skilled employees.</td><td>Toa Baja</td></tr><tr><td id="95"><input type="checkbox" v-model="rbids" value="Cristales Curvos y Templados"></td>
                    <td>Cristales Curvos Y Templados </td><td>Cristales Curvos, Templados y de Seguridad Elegantes Puertas de Duchas (Baño) Cristales para Escaleras Pisos en Cristal Elegantes Puertas Colgante Frameless Baños, Cuartos o Divisiones Lavamanos en Cristal Closet en Espejo Cristales Resistentes a Balas y a Fuego Fachadas Comerciales y Residenciales y mucho mas... “Usted lo Sueña, Nosotros lo Fabricamos”</td><td>Juana Diaz</td></tr><tr><td id="1"><input type="checkbox" v-model="rbids" value="Custom Guitar Shop"></td><td>Custom Guitar Shop</td><td>Wood Working for Musical Instruments.</td><td>Cabo Rojo</td></tr><tr><td id="89"><input type="checkbox" v-model="rbids" value="Del Norte Roofing" ></td>
                    <td>Del Norte Roofing</td><td>Del Norte Roofing is a waterproofing company that was founded in 2005. We work side by side with Hydro Stop to provide our clients with tested, trusted solutions for all their roofing and waterproofing projects needs.</td><td>Hatillo</td></tr><tr><td id="3"><input type="checkbox" v-model="rbids" value="Emco Industrial"></td>
                    <td>Emco Industrial Plastics, Inc.</td><td>As a leading plastics distributor in North America, Emco Industrial Plastics offers an extensive inventory of engineering, high performance, and commodity plastics. This massive selection of plastic materials includes Delrin®, Vespel®, Torlon®, Techtron®, Rulon®, Acetal, PEEK, PVDF, Ultem®, Semitron®, Macor®, Acrylic, Polycarbonates, and more, in diverse forms of sheet, rod, tube, profile, and film, and other related products.</td><td>Bayamon</td></tr><tr><td id="4"><input type="checkbox" v-model="rbids" value="Fastenal" ></td>
                    <td>Fastenal</td><td>With years of experience in providing high quality products and exceptional customer support, Fastenal Company is your first choice for Fastener and Industrial supplies.
                    We have the personal experience, capital resources and technological solutions to help you manage not only your supplies but your supply chain as well, in a manner that helps your company lower the total cost of ownership for class c materials. How do we do this?
                    A responsive global supply chain network.
                    Industry leading vendor managed inventory systems to reduce your costs of ownership and increase your core productivity
                    Sophisticated practices for supplier consolidation and process improvement
                    Local inventory and local personnel to provide you with timely and focused product management support
                    Specialty manufacturing capabilities to meet your specific needs and further reduce the need for managing additional vendors.</td><td>Caguas</td></tr><tr><td id="12"><input type="checkbox" v-model="rbids" value="Garcinox" ></td>
                    <td>Garcinox</td><td>Our organization was established to fill a need of fine crafmanship in the different areas or work with this material. We are dedicated exclusively to the manufacturing of stainless steel elements.</td><td>San Juan</td></tr><tr><td id="93"><input type="checkbox" v-model="rbids" value="Industrias Vasallo" ></td>
                    <td>Industrias Vassallo</td><td>Vassallo International Group is built upon more than fifty years of engineering excellence and innovation as manufacturer, distributor and researcher of PVC and CPVC products. Our research and development has resulted in over forty patents approved in the United States. Our company truly take pride in having been able to provide those markets we serve PVC and CPVC products of the highest quality controls and standards for optimum prices.</td><td>Ponce</td></tr><tr><td id="96"><input type="checkbox" v-model="rbids" value="MADECO"  ></td>
                    <td>MADECO</td><td>Madeco is a family owned company dedicated to provide the highest quality wood for retail and commercial sales, including developers and contractors. Our key business lies in our best-in-class customer service and the highest quality products in the market. Our customer experience is one of excellence, speediness, and courtesy, providing vast knowledge on our products acquired throughout more than 25 years of market experience.

                    Madeco, now called Los Portales de Madeco, started its operations in 1984 in a humble location in Escarlata St., Cupey, and Aguamarina St., Caguas. In 1987, a new strategic aliance was formed between the adept and tenacious engineer Ruben Valdes and technological expert economist Cid Erwing Lang, giving way to a new specialized Madeco and two new larger facilities in Sector Villa Blanca, Caguas, and, in 1989, in Sector Industrial El Cinco, Cupey, were the main operations run to this day.Both Valdes and Lang firmly believed in the importance of providing clients with high-end products that provide beauty as much as quality, which led them to provide a vast variety of models to match any of the client’s preferences and likes. Now, Madeco provides a vast selection of french, stained glass, lambril, panel, solid, semi-solid, closet, flush, and modern style doors made with the highest quality wood by the best manufacturers in the world. Madeco also counts on a large variety of Locks, Hardware, Tools, Woodworks, Closets, Terraces, and much more. All this at a fair price and along award winning customer service.</td><td>Caguas</td></tr><tr><td id="85"><input type="checkbox" v-model="rbids" value="Maderas 3C" ></td><td>Maderas 3C</td><td>Si... Somos mas que madera. Visite nuestra pagina en maderas3c.com</td><td>Caguas</td></tr><tr><td id="8"><input type="checkbox" v-model="rbids" value="Punta Borinquen Precast" ></td>
                    <td>Punta Borinquen Precast</td><td>Es una compañía enfocada en la creación de productos prefabricados en hormigón con los mejores estándares de calidad.</td><td>Isabela</td></tr><tr><td id="2"><input type="checkbox" v-model="rbids" value="Standard Rubber Product" ></td>
                    <td>Standard Rubber Product Co.</td><td>Provision of different rubber products and services.</td><td>San Juan</td></tr><tr><td id="6"><input type="checkbox" v-model="rbids" value="Steel And Pipes"></td>
                    <td>Steel And Pipes</td><td>We are your industrial supermarket &amp; much, much more</td><td>Caguas</td></tr><tr><td id="7"><input type="checkbox" v-model="rbids" value="Tamcor" ></td>
                    <td>Tamcor</td><td>All our products are manufactured either in Galvanized or Stainless Steel of the highest quality, from Steel Mills that have been loyal suppliers since 1973. To ensure promptness, TAMCOR has on it’s premises over 1,000,000 lbs. of steel (Galvanized and Stainless).</td><td>Trujillo Alto</td></tr><tr><td id="38"><input type="checkbox" v-model="rbids" value= "VALCOR"></td><td>Valcor</td>
                    <td>VALCOR está a la vanguardia con las últimas innovaciones arquitectónicas hechas en aluminio y cristal. Es el único proveedor en Puerto Rico de estructuras hechas a la medida y cuenta con la capacidad de satisfacer pedidos específicos - algo conveniente para desarrolladores, arquitectos y contratistas. Fachadas y conceptos tan impresionantes como las del Centro Comprensivo de Cáncer de Puerto Rico, y del Tribunal Supremo, se fabricaron en VALCOR. Tanto para la restauración de estructuras antiguas, como en la aplicación de innovadoras modalidades de la construcción contemporánea, esta empresa puertorriqueña es un recurso valioso.</td><td>Gurabo</td></tr></tbody>
                </table>
            </div>
                <div class="col-md-4 col-sm-6 pull-right">
                    <p>
                        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#basicModal">Remove</button>
                        <button type="button" class="btn btn-default btn-lg" onclick="loadPage('controlPanel')">Cancel</button>

                    </p><div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×
                                    </span><span class="sr-only">Close</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Removal Confirmation</h4>
                                </div>
                                <div class="modal-body">
                                    <h3>Are you sure you want to remove the selected business?</h3>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" onclick="getBusinessRemove()">Save changes</button>
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
  data() {
    return { rbids: [] };
  }
};
</script>
<style>
</style>

