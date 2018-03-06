/*
 Author: Ntuthuko Mthiyane
 Date: 06/03/2018
 Description: This test is responsible for testing the get Racer data function from data.js
*/
import { getRacerData } from './data';

describe('It ctests the get Racer function', () => {
	/* This will iterate through the returned array and check that the objects 
		returned all have the required properties and are not null */
	it('It checks if returned objects all conatin properties', () => {
		getRacerData().map((actual) => {
			expect(actual).toMatchObject(
				expect.objectContaining({
					login: expect.any(String),
					id: expect.any(Number),
					avatar_url: expect.any(String),
					gravatar_id: expect.any(String),
					url: expect.any(String),
					html_url: expect.any(String),
					followers_url: expect.any(String),
					gists_url: expect.any(String),
					starred_url: expect.any(String),
					subscriptions_url: expect.any(String),
					organizations_url: expect.any(String),
					repos_url: expect.any(String),
					events_url: expect.any(String),
					received_events_url: expect.any(String),
					type: expect.any(String),
					site_admin: expect.any(Boolean),
				})
			);
		});
	});
});