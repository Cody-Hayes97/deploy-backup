import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "./actions/actions";
import "./App.css";
import { Lyrics } from "./components/Lyrics";
import { SearchBar } from "./components/SearchBar";
import { Button } from "reactstrap";

function App(props) {
  const [artist, setArtist] = useState();
  const [title, setTitle] = useState();
  const [heading, setHeading] = useState();

  const handleChange = e => {
    setArtist(e.target.value);
  };
  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  return (
    <div className="App">
      {props.isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 style={{ marginTop: "2%", fontFamily: "Righteous" }}>
            Welcome to the Lyric Finder!
          </h1>
          <form
            onSubmit={() => {
              props.getData(artist, title);
              setHeading(title.toUpperCase() + " by " + artist.toUpperCase());
              setTitle("");
              setArtist("");
            }}
          >
            <br />
            <SearchBar
              search={artist}
              handleChange={handleChange}
              title={title}
              handleTitleChange={handleTitleChange}
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              style={{ marginBottom: "3%", fontFamily: "Righteous" }}
            >
              Submit
            </Button>
            <br />
            <Lyrics lyrics={props.lyrics} heading={heading} />
          </form>
        </>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    lyrics: state.lyrics,
    artist: state.artist,
    title: state.title
  };
};

export default connect(mapStateToProps, { getData })(App);
