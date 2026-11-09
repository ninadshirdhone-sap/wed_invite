import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTimeRemaining, generateWhatsAppRsvpUrl, generateGoogleMapsSearchUrl, getTranslations } from './invitation';

test('calculateTimeRemaining returns correct countdown values', () => {
  const future = new Date('2026-12-28T11:27:00+05:30').toISOString();
  // Simulate current time: 24 hours and 30 minutes before
  const now = new Date('2026-12-27T10:57:00+05:30').getTime();
  
  const result = calculateTimeRemaining(future, now);
  assert.equal(result.isPast, false);
  assert.equal(result.days, 1);
  assert.equal(result.hours, 0);
  assert.equal(result.minutes, 30);
  assert.equal(result.seconds, 0);
});

test('calculateTimeRemaining handles past dates gracefully', () => {
  const target = '2020-01-01T00:00:00Z';
  const result = calculateTimeRemaining(target, Date.now());
  assert.equal(result.isPast, true);
  assert.equal(result.days, 0);
  assert.equal(result.hours, 0);
  assert.equal(result.minutes, 0);
  assert.equal(result.seconds, 0);
});

test('generateWhatsAppRsvpUrl constructs valid wa.me link with encoded params', () => {
  const url = generateWhatsAppRsvpUrl('918454855058', 'Rahul Sharma', true, 2, 'Congratulations!');
  assert.match(url, /^https:\/\/wa\.me\/918454855058\?text=/);
  assert.ok(url.includes('Joyfully%20Attending'));
  assert.ok(url.includes('Rahul%20Sharma'));
  assert.ok(url.includes('2'));
});

test('generateGoogleMapsSearchUrl produces correct query URL with Place ID', () => {
  const urlWithPlaceId = generateGoogleMapsSearchUrl('Pandurang Mangal Karyalaya', 'ChIJBfQHoxXhwDsRF6DL-5J8FEI');
  assert.equal(
    urlWithPlaceId,
    'https://www.google.com/maps/search/?api=1&query=Pandurang%20Mangal%20Karyalaya&query_place_id=ChIJBfQHoxXhwDsRF6DL-5J8FEI'
  );

  const urlWithoutPlaceId = generateGoogleMapsSearchUrl('Pandurang Mangal Karyalaya');
  assert.equal(urlWithoutPlaceId, 'https://www.google.com/maps/search/?api=1&query=Pandurang%20Mangal%20Karyalaya');
});

test('getTranslations returns English and Marathi dictionary correctly', () => {
  const en = getTranslations('en');
  assert.equal(en.groomHero, 'NINAD');
  assert.equal(en.brideHero, 'RACHANA');
  assert.equal(en.welcomesYou, 'Welcomes You');

  const mr = getTranslations('mr');
  assert.equal(mr.groomHero, 'निनाद');
  assert.equal(mr.brideHero, 'रचना');
  assert.equal(mr.welcomesYou, 'आपले सहर्ष स्वागत करीत आहे');
  assert.equal(mr.weddingTitle, 'शुभ विवाह');
});

