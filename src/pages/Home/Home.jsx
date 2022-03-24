import './Home.scss';
import VideoLists from '../../components/VideoLists/VideoLists';

const Home = () => {
    return (
        <>
            <div className="home">
                <div  className="home-section">
                    <VideoLists width={250} height={200} imgHeight={150} />
                </div>
            </div>
        </>
    );
};

export default Home;