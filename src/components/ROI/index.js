import { useSelector, useDispatch } from 'react-redux';

import { MakeInput } from '../Utils/make_input';

import {
    setCostOfFungicide,
    setCostOfLabor,
    setPlotSize,
    setPriceOfGrain,
    selectCostOfFungicide,
    selectCostOfLabor,
    selectPlotSize,
    selectPriceOfGrain,
    selectROIResults,
   } from '../../redux/roi';

export const ROIInfo = () => {
    return <div>
		<a href="https://www.soybeaninnovationlab.illinois.edu/" target="_blank">
				<img src="https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp" width="150" height="140"></img>
				</a>
	       <h1> What is the economic gain of spraying fungicide?</h1>
         <p className="fs-3">Even when there is a yield preservation potential by fungicide application, the cost of spraying and the return on the fungicide investment in terms of yield preservation still

needs to be evaluated to determine if spraying is an economically viable option. In the next screen, please enter in the cost of fungicide per application per hectare, plot size in hectares, the price of grain, and the cost of labor per hectare and spray.
 Please use <a href="https://www.xe.com/currencyconverter/" target="_blank">
         this currency converter </a>to convert local currency to US Dollars ($) </p>
	</div>;
};

export const ROI = () => {
    const dispatch = useDispatch();

    const costOfFungicide = useSelector(selectCostOfFungicide);
    const plotSize = useSelector(selectPlotSize);
    const priceOfGrain = useSelector(selectPriceOfGrain);
    const costOfLabor = useSelector(selectCostOfLabor);

    const roi = useSelector(selectROIResults);

    return <div>
		<a href="https://www.soybeaninnovationlab.illinois.edu/" target="_blank">
				<img src="https://static.wixstatic.com/media/7b7dcd_a5000485d1a54ddab8ec49a70d547fb8~mv2.png/v1/fill/w_360,h_348,al_c,q_85,usm_0.66_1.00_0.01/SIL%20Vertical%20Logo%20square.webp" width="150" height="140"></img>
				</a>
      <h1> Return on Investment </h1>
	       <div className="border border-3 shadow shadow-3 p-3 px-5 mx-auto" style={{"width":"max-content"}}>
	<div className="row my-1">
	    <MakeInput labelClassNames="col-md-6 text-nowrap" inputClassNames="col-md-6"
		       name="costOfFungicide" state={costOfFungicide}
		       set={setCostOfFungicide} units="/ha" formatter={(v) => `\$${v}`}>
		Cost of Fungicide
	    </MakeInput>
	</div>
	<div className="row my-1">
	    <MakeInput labelClassNames="col-md-6 text-nowrap" inputClassNames="col-md-6"
		       name="plotSize" state={plotSize}
		       set={setPlotSize} units="ha">
		Plot Size
	       </MakeInput>
	</div>
	<div className="row my-1">
	    <MakeInput labelClassNames="col-md-6 text-nowrap" inputClassNames="col-md-6"
		       name="priceOfGrain" state={priceOfGrain}
		       set={setPriceOfGrain} units="/MT" formatter={(v) => `\$${v}`}>
		Price of Grain
	       </MakeInput>
	</div>
	<div className="row my-1">
	    <MakeInput labelClassNames="col-md-6 text-nowrap" inputClassNames="col-md-6"
		       name="costOfLabor" state={costOfLabor}
		       set={setCostOfLabor} units="/spray/ha" formatter={(v) => `\$${v}`}>
		Cost of Labor
	       </MakeInput>
	</div>
         </div>
	       <table className="table border border-3 my-3 mx-auto">
		   <thead>
		   <tr>
		       <th>
			   Growth Stage
		       </th>
		       <th>
			   Number of Sprays
		       </th>
			   <th>
			   Fungicide per Hectare
		       </th>
			   <th>
			   Labor per Hectare
		       </th>
			   <th>
			   Fungicide Total
		       </th>
			   <th>
			   Labor Total
		       </th>
			   <th>
			   Combined Total
		       </th>
		       <th>
			   Preserved Yield (MT/ha)
		       </th>
		       
		       <th>
			   Total Revenue
		       </th>
		       <th>
			   Net Margin/Revenue Costs
		       </th>
		       <th>
			   Return on inputs
		       </th>
		   </tr>
		       </thead>
		   <tbody>
		   {roi.map((d) => (
		       <tr>
			   <td>
			       {d.growthStage}
			   </td>
			   <td>
			       {d.sprays}
			   </td>
			   <td>
			       ${(d.sprays * costOfFungicide).toFixed(2)}
			   </td>
			   <td>
			       ${(d.sprays * costOfLabor).toFixed(2)}
			   </td>
			   <td>
			       ${(d.sprays * costOfFungicide * plotSize).toFixed(2)}
			   </td>
			   <td>
			       ${(d.sprays * costOfLabor * plotSize).toFixed(2)}
			   </td>
			   <td>
			       ${(d.sprays * costOfLabor * plotSize + d.sprays * costOfFungicide * plotSize).toFixed(2)}
			   </td>
			   <td>
			       {d.avgYield.toFixed(2)}
			   </td>
			   
			   <td>
			       ${d.incRevTotal.toFixed(2)}
			   </td>
			   <td>
			       ${((d.incRevTotal - (d.sprays * costOfLabor * plotSize + d.sprays * costOfFungicide * plotSize))).toFixed(2)}
			   </td>
			   <td>
			       ${((d.incRevTotal - (d.sprays * costOfLabor * plotSize + d.sprays * costOfFungicide * plotSize))/(d.sprays * costOfLabor * plotSize + d.sprays * costOfFungicide * plotSize)).toFixed(2)}
			   </td>
		       </tr>
		   ))}
		       </tbody>
	       </table>
	       <div className="border border-3 shadow shadow-3 my-3 p-3">
		   <h3> Definitions </h3>
	       <dl className="row">
		   <dt className="col-sm-3">Average yield increases</dt>
		   <dd className="col-sm-9">based on timing and number of sprays are estimated based on select locations in Mueller, et al. 2009. Plant Disease 93(3):243-248. Yield increases from fungicide application are highly dependent on rust pressure. These averages are based on moderate rust pressure and will be lower or higher depending on conducive environment. </dd>


		   <dt className="col-sm-3">Increase in revenue/ha</dt>
		   <dd className="col-sm-9">based off the estimated yield increase (MT/ha) multiplied by the price of grain ($/MT) </dd>

		   <dt className="col-sm-3">Gross margins/ha</dt>
		   <dd className="col-sm-9">calculated by subtracting the cost of fungicide and labor per spray multiplied by the number of sprays from the increase in revenue/ha.</dd>
		   
		   <dt className="col-sm-3">Net margin</dt>
		   <dd className="col-sm-9">Total revenue – Total cost</dd>

		   <dt className="col-sm-3">Return of inputs (ROI)</dt>
		   <dd className="col-sm-9">How much net income (return) do I get per dollar of expense (fungicide + labor) </dd>
	       </dl>
		   </div>


    </div>;

}
