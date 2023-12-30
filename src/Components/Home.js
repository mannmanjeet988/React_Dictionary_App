import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Loading, Success, Error } from "../redux/actions/apiCalls";
import addToHistory from "../redux/actions/historyActions";
import axios from "axios";
import { fetchMeaning } from "../redux/actions/apiCalls";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const { loading, data, error } = useSelector((state) => state.homeData);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  console.log({ loading, error, data });

  // useEffect(() => {
  //   dispatch(fetchMeaning(searchTerm));
  //
  // }, []);

  // const item1 = data[0]
  // const uniquePhonetics = [];
  // item1.phonetics.forEach((phonetic) => {
  //   if (!uniquePhonetics.some((uniquePhonetic) => uniquePhonetic.audio === phonetic.audio)) {
  //     uniquePhonetics.push(phonetic);
  //   }
  // });

  function handleClick() {
    dispatch(fetchMeaning(searchTerm));
    dispatch(addToHistory(searchTerm));
    setSearchTerm("");
  }

  return (
    <div className="home">
      <input
        type="text"
        placeholder="Enter Word Here!"
        onChange={(e) => setSearchTerm(e.target.value)
        } value={searchTerm}
      ></input>

      <button className="btn" onClick={()=>handleClick()} disabled={!searchTerm}>
        Search
      </button>
      {/* <button
        className="btn"
        onClick={()=>setSearchTerm("")}
      >
        Reset
      </button> */}

      {!loading && !data && <div>Loading...</div>}
      {loading && data ? (
        <div className="outer-container">
          {data.map((item) => (
            <div key={uuidv4()}>
              <div>
                <h2 className="word">{item.word}</h2>
                <h3>Part Of Speech:</h3>
                <li>{item.meanings[0].partOfSpeech}</li>

                {/* <h3>Phonetic Transcription:</h3>
                {item.phonetic ? (
                  <div>
                    <li> {item.phonetic}</li>
                  </div>
                ) : (
                  <li>No Phonetic Transcription available </li>
                )} */}

                {/* <div>
        <h3>Phonetics:</h3>
        {uniquePhonetics.length > 0 ? (
          <div>
            <li><span>{uniquePhonetics[0].text}</span>
            <audio controls>
              <source src={uniquePhonetics[0].audio} type="audio/mpeg" />
            </audio>
            </li>
          </div>
        ) : (
          <li>No audio available</li>
        )}
      </div> */}

                <div>
                  <h3>Phonetics:</h3>
                  <ul>
                    {item.phonetics && item.phonetics.length > 0 ? (
                      item.phonetics.map((phonetic, phoneticIndex) => (
                        <li key={phoneticIndex}>
                          <span>{phonetic.text}</span>
                          {phonetic.audio ? (
                            <audio controls>
                              <source src={phonetic.audio} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          ) : (
                            <span>No audio available</span>
                          )}
                        </li>
                      ))
                    ) : (
                      <li>No phonetics available</li>
                    )}
                  </ul>
                </div>

                <div>
                  <h3>Source URLs:</h3>
                  <ul>
                    {item.sourceUrls && item.sourceUrls.length > 0 ? (
                      item.sourceUrls.map((url, urlIndex) => (
                        <li key={urlIndex}>
                          <a href={url} target="_blank">
                            {url}
                          </a>
                        </li>
                      ))
                    ) : (
                      <li>No source URLs available</li>
                    )}
                  </ul>
                </div>

                <h3>Definitions:</h3>
                <ul>
                  {item.meanings && item.meanings.length > 0 ? (
                    item.meanings[0].definitions.map((definition, defIndex) => (
                      <li key={defIndex}>{definition.definition}</li>
                    ))
                  ) : (
                    <li>No definitions available</li>
                  )}
                </ul>
              </div>
              <div>
                <h3>Synonyms:</h3>
                <ul>
                  {item.meanings &&
                  item.meanings.length &&
                  item.meanings[0].synonyms.length > 0 > 0 ? (
                    item.meanings[0].synonyms.map((synonym, synIndex) => (
                      <li key={synIndex}>{synonym}</li>
                    ))
                  ) : (
                    <li>No synonyms available</li>
                  )}
                </ul>
              </div>
              <div>
                <h3>Antonyms:</h3>
                <ul>
                  {item.meanings &&
                  item.meanings.length > 0 &&
                  item.meanings[0].antonyms.length > 0 ? (
                    item.meanings[0].antonyms.map((antonym, antIndex) => (
                      <li key={antIndex}>{antonym}</li>
                    ))
                  ) : (
                    <li>No antonyms available</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "  "
      )}
    </div>
  );
};

export default Home;
