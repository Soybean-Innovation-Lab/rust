import { useSelector, useDispatch } from 'react-redux';

import {
    selectRustPresenceSelection,
    selectGrowthStageSelection,
    selectSeason,
    selectLocation,
    selectVariety,
} from '../../redux/spray_gate';

import {
    selectSeasons,
    selectSeasonLocationVarietySusceptible
} from '../../redux/data';
const useShouldSpray() {
    const season = useSelector(selectSeason);
    const location = useSelector(selectLocation);
    const variety = useSelector(selectVariety);

    const sus = useSelector(selectSeasonLocationVarietySusceptible(season, location, variety));
    
}
