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
    <pre>
    {JSON.stringify(roi)}
    </pre>
    </div>;

}
