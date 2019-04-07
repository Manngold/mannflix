import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Component/Section";
import Loader from "../../Component/Loader";
import Message from "../../Component/Message";
import Poster from "../../Component/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
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
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming">
          {upcoming.map(movie => (
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
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
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
      {error && <Message text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
