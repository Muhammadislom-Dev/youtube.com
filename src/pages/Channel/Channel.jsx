import './Channel.scss';
import { Link, Switch, Route } from 'react-router-dom';

//Images
import ChannelImg from '../../assets/img/channel-img.png';
import ChannelUser from '../../assets/img/channel-user.png';
import SearchIcon from '../../assets/img/search-icon.png';
import ChannelOval1 from '../../assets/img/channelOval1.png';
import ChannelOval2 from '../../assets/img/channelOval2.png';
import ChannelOval3 from '../../assets/img/channelOval3.png';

//Components
import ChannelItem from '../../components/ChannelItem/ChannelItem';
import RenderVideos from '../../components/RenderVideos/RenderVideos';

const Channel = () => {
    const handleAddClass = (evt) => {
        if (
            evt.target.matches(
                '.channel-content__section-content__left-top__item-link'
            )
        ) {
            const links = document.querySelectorAll(
                '.channel-content__section-content__left-top__item-link-active'
            );
            links.forEach((link) => {
                link.classList.remove(
                    'channel-content__section-content__left-top__item-link-active'
                );
            });
            evt.target.classList.add(
                'channel-content__section-content__left-top__item-link-active'
            );
        }
    };

    return (
        <>
            <div className="channel">
                <img className="channel__img" src={ChannelImg} alt="" />
                <div className="channel-content">
                    <div className="channel-content__section">
                        <div className="channel-content__section-top">
                            <Link
                                className="channel-content__section-top__left"
                                to="/channel"
                            >
                                <img
                                    src={ChannelUser}
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                                <div>
                                    <h2>Margaret Phelps</h2>
                                    <p>245k subscribed</p>
                                </div>
                            </Link>
                        </div>
                        <div className="channel-content__section-content">
                            <div className="channel-content__section-content__left">
                                <ul
                                    onClick={handleAddClass}
                                    className="channel-content__section-content__left-top"
                                >
                                    <li className="channel-content__section-content__left-top__item">
                                        <Link
                                            className="channel-content__section-content__left-top__item-link channel-content__section-content__left-top__item-link-active"
                                            to="/channel"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="channel-content__section-content__left-top__item">
                                        <Link
                                            className="channel-content__section-content__left-top__item-link"
                                            to="/channel/videos"
                                        >
                                            Videos
                                        </Link>
                                    </li>
                                    <li className="channel-content__section-content__left-top__item">
                                        <Link
                                            className="channel-content__section-content__left-top__item-link"
                                            to="/channel/playlists"
                                        >
                                            Playlists
                                        </Link>
                                    </li>
                                    <li className="channel-content__section-content__left-top__item">
                                        <Link
                                            className="channel-content__section-content__left-top__item-link"
                                            to="/channel/channels"
                                        >
                                            Channels
                                        </Link>
                                    </li>
                                    <li className="channel-content__section-content__left-top__item">
                                        <Link
                                            className="channel-content__section-content__left-top__item-link"
                                            to="/channel/discussion"
                                        >
                                            Discussion
                                        </Link>
                                    </li>
                                    <li className="channel-content__section-content__left-top__item">
                                        <Link
                                            className="channel-content__section-content__left-top__item-link"
                                            to="/channel/about"
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li className="channel-content__section-content__left-top__item">
                                        <button>
                                            <img
                                                src={SearchIcon}
                                                alt="icon"
                                                width={20}
                                                height={20}
                                            />
                                        </button>
                                    </li>
                                </ul>
                                <Switch>
                                    <Route path="/channel/videos">
                                        /videos
                                    </Route>
                                    <Route path="/channel/playlists">
                                        /playlists
                                    </Route>
                                    <Route path="/channel/channels">
                                        /channels
                                    </Route>
                                    <Route path="/channel/discussion">
                                        /discussion
                                    </Route>
                                    <Route path="/channel/about">/aboute</Route>
                                    <Route path="/channel">
                                        <ChannelItem />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                        <div className="channel-content__section-bottom">
                            <RenderVideos
                                width={250}
                                height={200}
                                imgHeight={150}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Channel;