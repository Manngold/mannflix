import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Component/Loader";
import Section from "../../Component/Section";
import Message from "../../Component/Message";
import Poster from "../../Component/Poster";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  loading,
  error,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Searching Movie or TV Show"
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <Poster
                key={movie.id}
                title={movie.original_title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                id={movie.id}
                year={movie.release_date.slice(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map(show => (
              <Poster
                key={show.id}
                title={show.original_name}
                rating={show.vote_average}
                imageUrl={show.poster_path}
                id={show.id}
                year={show.first_air_date.slice(0, 4)}
              />
            ))}
          </Section>
        )}
      </Container>
    )}
    {movieResults &&
      movieResults.length === 0 &&
      tvResults &&
      tvResults.length === 0 && <Message text="Nothing Founded" />}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSearch: PropTypes.func,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
