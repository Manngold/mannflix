import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Component/Section";
import Loader from "../../Component/Loader";
import Message from "../../Component/Message";
import Poster from "../../Component/Poster";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated">
          {topRated.map(show => (
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
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(show => (
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
      {airingToday && airingToday.length > 0 && (
        <Section title="Airing Today">
          {airingToday.map(show => (
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
      {error && <Message text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;
