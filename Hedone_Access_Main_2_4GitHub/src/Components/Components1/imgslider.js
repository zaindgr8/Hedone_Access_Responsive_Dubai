import React from 'react'
import Boxes from "../MemberShip/boxes.js"
import consultency from "../../Assets/consultency.avif"
import travel from "../../Assets/travel.avif"
import events from "../../Assets/events.avif"
import realState from "../../Assets/realState.avif"
import bm1 from "../../Assets/b&m1.jpg"

function imgslider() {
  return (
   <>
  <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-8 max-w-[90%] mx-auto mt-10'>
<Boxes title="Business Consultancy" description="Our top-tier private concierge company, assigns dedicated Lifestyle Managers to provide personalized consultancy services. These experts offer tailored recommendations and expert advice." image={consultency} 
 bullets={[
    "Market Analysis",
    "Individualized Business Analyses",
    "Business Planning",
    "Implementation"
  ]}/>
  <Boxes title="Branding & Marketing" description="Not only can Hedone Access provide prime consultancy but also we take care of your branding and marketing. Hedone Access has the know-how and the network to reach your target audience."
 
 image={bm1} 
 bullets={[
  "Gain Visibility ",
  "Stand out from your competitors",
 " Earn people’s trust and loyalty ",
 " Benefit from our network "
  
  ]}/>
<Boxes title="Travel Services" description="With our expert travel recommendations and access to premium amenities, we ensure every trip is a memorable adventure designed around your desires. We specialize in crafting exceptional travel experiences. " image={travel} 
 bullets={[
  "Flights, Accommodations, Rented Cars",
  "Restaurants, Activities, Nightlife",
 " Lean back and enjoy your travel",
  "We take care of your individual needs"
  ]}  />
<Boxes title="Event Organizers" description="Our team specializes in crafting unforgettable experiences, from private celebrations to corporate gatherings. With meticulous planning and attention to detail, we ensure that every event reflects your vision." image={events} 
 bullets={[
  "Invited to our all exclusive events ",
"Get VIP access to the most popular events",
"Private or Corporate gatherings",
"Weddings &  Parties" 

  ]}  />
</div>
   </>
  )
}

export default imgslider