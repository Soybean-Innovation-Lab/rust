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
	       <h1> Info </h1>
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
	       <MakeInput name="costOfFungicide" state={costOfFungicide}
			  set={setCostOfFungicide} units="/MT" formatter={(v) => `\$${v}`}>
		   Cost of Fungicide
	       </MakeInput>
	       <MakeInput name="plotSize" state={plotSize}
			  set={plotSize} units="ha">
		   Plot Size
	       </MakeInput>
	       <MakeInput name="priceOfGrain" state={priceOfGrain}
			  set={setPriceOfGrain} units="/MT" formatter={(v) => `\$${v}`}>
		   Price of Grain
	       </MakeInput>
	       <MakeInput name="costOfLabor" state={costOfLabor}
			  set={setCostOfLabor} units="/spray/ha" formatter={(v) => `\$${v}`}>
		   Cost of Labor
	       </MakeInput>
	       <table>
		   <tr>
		       <th>
			   Growth Stage
		       </th>
		       <th>
			   Number of Sprays
		       </th>
		       <th>
			   Average Yield
		       </th>
		       <th>
			   Increase in Revenue/ha
		       </th>
		       <th>
			   Increase in Total Revenue
		       </th>
		       <th>
			   Revenue Costs
		       </th>
		       <th>
			   Return on inputs
		       </th>
		   </tr>
		   {roi.map((d) => (
		       <tr>
			   <td>
			       {d.growthStage}
			   </td>
			   <td>
			       {d.sprays}
			   </td>
			   <td>
			       {d.avgYield}
			   </td>
			   <td>
			       {d.incRev}
			   </td>
			   <td>
			       {d.incRevTotal}
			   </td>
			   <td>
			       {d.revCosts}
			   </td>
			   <td>
			       {d.returnOnIn}
			   </td>
		       </tr>
		   ))}
	       </table>
	       <dl class="row">
	       <dt class="col-sm-3">Description lists</dt>
	       <dd class="col-sm-9">A description list is perfect for defining terms.</dd>
		   <dt class="col-sm-3">Average yield increases</dt>
		   <dd class="col-sm-9">based on timing and number of sprays are estimated based on select locations in Mueller, et al. 2009. Plant Disease 93(3):243-248. Yield increases from fungicide application are highly dependent on rust pressure. These averages are based on moderate rust pressure and will be lower or higher depending on conducive environment. </dd>


		   <dt class="col-sm-3">Increase in revenue/ha</dt>
		   <dd class="col-sm-9">is based off the estimated yield increase (MT/ha) multiplied by the price of grain ($/MT) </dd>

		   <dt class="col-sm-3">Gross margins/ha</dt>
		   <dd class="col-sm-9">are calculated by subtracting the cost of fungicide and labor per spray multiplied by the number of sprays from the increase in revenue/ha.</dd>

		   <dt class="col-sm-3">Return on inputs</dt>
		   <dd class="col-sm-9">is the gross margin/ha divided by the cost of fungicide/ha multiplied by the number of sprays. </dd>
	       </dl>


    </div>;

}
