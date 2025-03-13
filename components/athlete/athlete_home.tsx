"use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
import { BikeGrid } from "@/components/athlete/bike_grid";
// import { getDetailedAthlete } from "@/actions/get_strava_info";
// import { getClientCookie } from "@/components/cookies/clientCookies";
// import { useState, useEffect } from "react";

export default function AthleteHome({
  detailedAthlete,
}: {
  detailedAthlete: any;
}) {
  const bikes = detailedAthlete ? detailedAthlete.bikes : [];

  return (
    <div>
      {!detailedAthlete && <div>Unable to get Athlete details</div>}
      {detailedAthlete && (
        <div>
          <div className="text-lg text-blue-600">
            {detailedAthlete.firstname} {detailedAthlete.lastname} with ID{" "}
            {detailedAthlete.id}
          </div>
          <img src={detailedAthlete.profile} alt="Image of athlete" />
          <BikeGrid bikes={bikes} />
        </div>
      )}
    </div>
  );
}

// Strava response:  clientID is  149987  scope is  read,profile:read_all
// get_access. detailedAthlete is  {
//   id: 999999,
//   username: null,
//   resource_state: 3,
//   firstname: 'xxxxxx',
//   lastname: 'xxxxxxxx',
//   bio: '',
//   city: 'xxxxxxxxxx',
//   state: 'CA',
//   country: 'United States',
//   sex: 'M',
//   premium: true,
//   summit: true,
//   created_at: '2012-02-05T20:46:30Z',
//   updated_at: '2025-02-16T01:05:34Z',
//   badge_type_id: 1,
//   weight: 86.1825,
//   profile_medium: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/9999999/83461/7/medium.jpg',
//   profile: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/9999999/83461/7/large.jpg',
//   friend: null,
//   follower: null,
//   blocked: false,
//   can_follow: true,
//   follower_count: 69,
//   friend_count: 50,
//   mutual_friend_count: 0,
//   athlete_type: 0,
//   date_preference: '%m/%d/%Y',
//   measurement_preference: 'feet',
//   clubs: [
//     {
//       id: 9488,
//       resource_state: 2,
//       name: 'Palo Verde Velo',
//       profile_medium: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/9488/153448/1/medium.jpg',
//       profile: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/9488/153448/1/large.jpg',
//       cover_photo: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/9488/6071652/1/large.jpg',
//       cover_photo_small: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/9488/6071652/1/small.jpg',
//       activity_types: [Array],
//       activity_types_icon: 'sports_bike_normal',
//       dimensions: [Array],
//       sport_type: 'cycling',
//       localized_sport_type: 'Cycling',
//       city: 'Blah Blah',
//       state: 'CA',
//       country: 'United States',
//       private: true,
//       member_count: 0,
//       featured: false,
//       verified: false,
//       url: 'palo-verde-velo',
//       membership: 'member',
//       admin: false,
//       owner: false
//     },
//     {
//       id: 226180,
//       resource_state: 2,
//       name: 'Barefoot Networks Cycling',
//       profile_medium: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/226180/4982766/2/medium.jpg',
//       profile: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/226180/4982766/2/large.jpg',
//       cover_photo: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/226180/4983891/1/large.jpg',
//       cover_photo_small: 'https://dgalywyr863hv.cloudfront.net/pictures/clubs/226180/4983891/1/small.jpg',
//       activity_types: [Array],
//       activity_types_icon: 'sports_bike_normal',
//       dimensions: [Array],
//       sport_type: 'cycling',
//       localized_sport_type: 'Cycling',
//       city: 'Blah Blah',
//       state: 'California',
//       country: 'United States',
//       private: false,
//       member_count: 0,
//       featured: false,
//       verified: false,
//       url: 'barefootnetworks',
//       membership: 'member',
//       admin: true,
//       owner: false
//     }
//   ],
//   postable_clubs_count: 2,
//   ftp: null,
//   bikes: [
//     {
//       id: 'b4185172',
//       primary: false,
//       name: 'CruX 105',
//       nickname: 'CruX 105',
//       resource_state: 2,
//       retired: false,
//       distance: 13097137,
//       converted_distance: 8138.2
//     },
//     {
//       id: 'b3207071',
//       primary: false,
//       name: 'Shimano Tarmac',
//       nickname: 'Shimano Tarmac',
//       resource_state: 2,
//       retired: false,
//       distance: 10671212,
//       converted_distance: 6630.8
//     },
//     {
//       id: 'b15296921',
//       primary: false,
//       name: 'Super 6 ',
//       nickname: 'Super 6 ',
//       resource_state: 2,
//       retired: false,
//       distance: 703682,
//       converted_distance: 437.2
//     }
//   ],
//   shoes: [],
//   is_winback_via_upload: false,
//   is_winback_via_view: false
// }
