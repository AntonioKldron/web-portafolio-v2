// src/backend/services/githubService.js

const GITHUB_GRAPHQL_URL = 'https://api.github.com/graphql';

/**
 * Builds the GitHub GraphQL query for contribution data.
 */
const buildQuery = (anio) => {
  const fechaInicio = `${anio}-01-01T00:00:00Z`;
  const fechaFin   = `${anio}-12-31T23:59:59Z`;

  return {
    query: `
      query($userName: String!, $fechaInicio: DateTime!, $fechaFin: DateTime!) {
        user(login: $userName) {
          name avatarUrl bio login
          followers { totalCount }
          repositories(first: 20, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
            totalCount
            nodes {
              name
              languages(first: 5) { edges { node { name color } } }
            }
          }
          statsRepos: repositories(first: 50, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
            nodes {
              languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                edges { size node { name color } }
              }
            }
          }
          contributionsCollection(from: $fechaInicio, to: $fechaFin) {
            totalCommitContributions
            totalPullRequestContributions
            totalIssueContributions
            contributionCalendar {
              totalContributions
              weeks { contributionDays { contributionCount date color contributionLevel } }
            }
          }
        }
      }
    `,
    variables: { userName: username, fechaInicio, fechaFin },
  };
};

/**
 * Fetches GitHub user data for a given year.
 * @param {string} username
 * @param {number} anio
 * @param {string} token
 * @returns {Promise<object|null>}
 */
export const fetchGithubData = async (username, anio, token) => {
  const body = {
    query: `
      query($userName: String!, $fechaInicio: DateTime!, $fechaFin: DateTime!) {
        user(login: $userName) {
          name avatarUrl bio login
          followers { totalCount }
          repositories(first: 20, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
            totalCount
            nodes {
              name
              languages(first: 5) { edges { node { name color } } }
            }
          }
          statsRepos: repositories(first: 50, orderBy: {field: PUSHED_AT, direction: DESC}, privacy: PUBLIC) {
            nodes {
              languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
                edges { size node { name color } }
              }
            }
          }
          contributionsCollection(from: $fechaInicio, to: $fechaFin) {
            totalCommitContributions
            totalPullRequestContributions
            totalIssueContributions
            contributionCalendar {
              totalContributions
              weeks { contributionDays { contributionCount date color contributionLevel } }
            }
          }
        }
      }
    `,
    variables: {
      userName:    username,
      fechaInicio: `${anio}-01-01T00:00:00Z`,
      fechaFin:    `${anio}-12-31T23:59:59Z`,
    },
  };

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': `bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const { data } = await response.json();
  return data?.user ?? null;
};