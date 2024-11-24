"use client"

import PhishingManagementTable from '../components/PhishingManagementTable';
import PhishingForm from '../components/PhishingForm';

export default function Page() {

  
     return (
      <div>
      <div>
        <PhishingForm></PhishingForm>
      </div>
        <div>
          <PhishingManagementTable></PhishingManagementTable>
    </div>
    </div>)
}