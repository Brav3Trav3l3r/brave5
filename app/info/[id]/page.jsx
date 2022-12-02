import { getInfo } from '../../../utils/getInfo';
import info from '../../../data/info.json'
import Overview from './Overview';

const Info = async ({ params: { id } }) => {
    // const info = await getInfo(id)

    return (
        <div className="info w-full relative ">
            <Overview info={info}/>
        </div >
    );
}

export default Info;