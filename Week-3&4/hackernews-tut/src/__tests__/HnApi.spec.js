import axios from 'axios';
import { getStoryIds, getStory, newStoriesUrl, StoryUrl } from '../service/hnApi';
import { singularStory, storyIds, emptySingularStory } from '../fixtures';

jest.mock('axios');

describe('HackerNews Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('getStory functionality', () => {
    it('requests and gets a story from the HackerNews Api', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: singularStory }));

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${StoryUrl + 1}.json`);
      expect(entity).toEqual(singularStory);
    });

    it('does not retrieve a story from the Api, but handles gracefully', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: emptySingularStory }));

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${StoryUrl + 1}.json`);
      expect(entity).toEqual(emptySingularStory);
    });
  });

  describe('getStoryIds functionality', () => {
    it('requests and gets story ids from the HackerNews Api', async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(newStoriesUrl);
      expect(entity).toEqual(storyIds);
    });
  });
});
