import { Api, DEFAULT, Env, Info } from '../types';

// editor

export const getEditorRootUrl = (env: string) => {
  switch (env) {
    case DEFAULT:
      return DEFAULT;

    case Env.PRODUCTION:
      return `https://editor.foleon.com`;
    case Env.BETA:
      return `https://editor-beta.foleon.com`;
    case Env.RELEASE:
      return `https://editor.foleon.dev`;
    case Env.RELEASE_BETA:
      return `https://editor-beta.foleon.dev`;

    default:
      return `https://editor-${env}.foleon.dev`;
  }
};

export const getEditorFullUrl = (info: Info, env: string) => {
  const path = `/publication/${info.pubId}/pages/${info.pageId}${info.overlayId ? `/overlay/${info.overlayId}` : ''}`;
  return `${getEditorRootUrl(env)}${path}`;
};

// previewer

export const getPreviewerRootUrl = (env: string) => {
  switch (env) {
    case DEFAULT:
      return DEFAULT;

    case Env.PRODUCTION:
    case Env.BETA:
      return `https://previewer.foleon.com`;
    case Env.RELEASE:
    case Env.RELEASE_BETA:
      return `https://previewer.foleon.dev`;

    default:
      return `https://previewer-${env}.foleon.dev`;
  }
};

export const getPreviewerFullUrl = (env: string, pubId: string, api: string) => {
  const path = `/?publicationId=${pubId}&api=${api}`;
  return `${getPreviewerRootUrl(env)}${path}`;
};

// dashboard

export const getDashboardRootUrl = (env: string) => {
  switch (env) {
    case DEFAULT:
      return DEFAULT;

    case Env.PRODUCTION:
      return `https://app.foleon.com`;
    case Env.BETA:
      return `https://app-beta.foleon.com`;
    case Env.RELEASE:
      return `https://app.foleon.dev`;
    case Env.RELEASE_BETA:
      return `https://app-beta.foleon.dev`;

    default:
      return `https://app-${env}.foleon.dev`;
  }
};

export const getDashboardFullUrl = (env: string) => getDashboardRootUrl(env);

// api

export const getApiUrl = (api: string) => {
  switch (api) {
    case DEFAULT:
      return DEFAULT;
    case Api.PRODUCTION:
      return `https://api.foleon.com`;
    default:
      return `https://api-${api}.foleon.dev`;
  }
};
