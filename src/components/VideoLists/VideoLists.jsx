import './VideoLists.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { GetData } from '../../context/GetData';
import { GetVideoId } from '../../context/GetVideoId';
import { useContext } from 'react';

const VideoLists = () => {
    const array = useContext(GetData);
    const Loading = array[1];
    const newArray = array[0];
    const [id, setId] = useContext(GetVideoId);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    overflow: 'hidden',
                }}
            >
                <SkeletonTheme baseColor="#303030" highlightColor="#333333">
                    {Loading
                        ? Array.from(new Array(20)).map((e, i) => (
                              <div  data-aos="zoom-in"  data-aos-duration="3000"
                                  key={i}
                                  className="video-link"
                                  style={{
                                      width: 300 + 'px',
                                      marginRight: 8 + 'px',
                                      marginLeft: 8 + 'px',
                                      marginBottom: 40 + 'px',
                                  }}
                              >
                                  <p
                                      style={{
                                          margin: 0,
                                          padding: 0,
                                          marginBottom: 8 + 'px',
                                      }}
                                  >
                                      <Skeleton 
                                          style={{
                                              borderRadius: 0,
                                              height: 167 + 'px',
                                          }}
                                      />
                                  </p>
                                  <p
                                      style={{
                                          margin: 0,
                                          padding: 0,
                                          marginBottom: 3 + 'px',
                                      }}
                                  >
                                      <Skeleton style={{ borderRadius: 0 }} />
                                  </p>
                                  <p
                                      style={{
                                          margin: 0,
                                          padding: 0,
                                          width: '70%',
                                      }}
                                  >
                                      <Skeleton style={{ borderRadius: 0 }} />
                                  </p>
                              </div>
                          ))
                        : newArray.map((e, i) => (
                              <Link
                                  key={i}
                                  className="video-link"
                                  style={{
                                      width: 300 + 'px',
                                      marginLeft: 8 + 'px',
                                      marginRight: 8 + 'px',
                                      marginBottom: 40 + 'px',
                                  }}
                                  to="/video"
                                  onClick={(element) => setId(e.id.videoId)}
                              >
                                  <img
                                      src={e.snippet.thumbnails.high.url}
                                      style={{
                                          width: 100 + '%',
                                          height: 167 + 'px',
                                      }}
                                      loading="lazy"
                                      alt=""
                                  />
                                  <div className="skeleton">
                                      <h3 >{e.snippet.title}</h3>
                                      <div
                                          style={{
                                              display: 'flex',
                                              justifyContent: 'space-between',
                                              marginTop: '5px',
                                          }}
                                      >
                                      </div>
                                  </div>
                              </Link>
                          ))}
                </SkeletonTheme>
            </div>
        </>
    );
};

export default VideoLists;