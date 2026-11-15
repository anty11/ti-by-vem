import { test } from "node:test";
import assert from "node:assert/strict";
import { oktoberfestVenues as venues } from "./oktoberfest-venues";

test("Bellagio scores match the Google Maps listings checked on 15 November 2026", () => {
  assert.equal(venues.forma.rating, 4.0);
  assert.equal(venues.sanGiacomo.rating, 4.2);
  assert.equal(venues.lanterna.rating, 4.1);
  assert.equal(venues.forma.checkedOn, "15 November 2026");
});
test("Seceda dining suggestions retain their independently verified scores", () => {
  assert.equal(venues.seceda.rating, 3.9);
  assert.equal(venues.troier.rating, 4.7);
  assert.equal(venues.fermeda.rating, 4.5);
  assert.equal(venues.gamsblut.rating, 4.6);
  assert.equal(venues.pieralongia.rating, 4.7);
  assert.equal(venues.firenze.rating, 4.6);
  assert.equal(venues.odles.rating, 4.6);
});
test("Val di Funes hut scores match their own listings", () => {
  assert.equal(venues.geisler.rating, 4.5);
  assert.equal(venues.gschnagenhardt.rating, 4.6);
  assert.equal(venues.dusler.rating, 4.5);
});
test("Tre Cime hut scores match their own listings", () => {
  assert.equal(venues.auronzo.rating, 4.2);
  assert.equal(venues.lavaredo.rating, 4.2);
  assert.equal(venues.locatelli.rating, 4.2);
  assert.equal(venues.langalm.rating, 4.3);
});
test("hotel-wide scores are not attributed to individual restaurants", () => {
  assert.equal(venues.antorno.rating, 4.2);
  assert.ok(venues.antorno.ratingScope?.includes("whole"));
  assert.equal(venues.kasskessl.rating, 4.6);
  assert.ok(venues.kasskessl.ratingScope?.includes("not a separate"));
});
test("final day dining scores match verified listings", () => {
  assert.equal(venues.olperer.rating, 4.7);
  assert.equal(venues.zenz.rating, 4.7);
});