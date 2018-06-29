import React from 'react'
import ItemBlock from './itemBlock'

const eventA = {
      "id": 2,
      "name": "Freshie Community Garden",
      "location": "Crown Reserve, Queenscliff",
      "postcode": 2095,
      "day": "Sunday",
      "time": "Day",
      "description": "Freshie Community Garden seeks to create an attractive, welcome, shared and safe place to grow fruit trees, vegetables and flowers using sustainable practices, and to promote social harmony and inclusion through building community capacity.",
      "image": "https://files.northernbeaches.nsw.gov.au/sites/default/files/styles/gi--main-thumbnail/public/images/recreational-areas/2018-06-19-10-00//freshiecomgard.jpg?itok=3bH4eyss"
};

const DayList = ({ day }) => (
  <div>
    <h1>{ day }</h1>
    <ItemBlock data={eventA} />
    <ItemBlock data={eventA} />
    <ItemBlock data={eventA} />
    <ItemBlock data={eventA} />
  </div>
)

export default DayList
