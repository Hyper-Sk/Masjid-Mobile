function namazTimings() {
  let namazURL = {
    fajrAzaan: '6:00 AM',
    fajrIqama: '6:30 AM',
    zuharAzaan: '1:15 PM',
    zuharIqama: '1:30 PM',
    asarAzaan: '4:45 PM',
    asarIqama: '5:00 PM',
    maghribAzaan: 'Sunset',
    maghribIqama: 'Sunset',
    ishaAzaan: '8:00 PM',
    ishaIqama: "8:15 PM",
    jummahAzaan: '12:45 AM',
    jummahIqama: '2:20 PM',
    eidUlAdha: '7:00 AM',
    eidUlFitr: '7:00 AM',
}

let timings = document.querySelector(".timings-content")

let timingsData = `<table>
<thead>
  <tr>
    <td>Prayer</td>
    <td>Azaan</td>
    <td>Iqama</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Fajr</td>
    <td>${namazURL.fajrAzaan}</td>
    <td>${namazURL.fajrIqama}</td>
  </tr>
  <tr>
    <td>Zuhar</td>
    <td>${namazURL.zuharAzaan}</td>
    <td>${namazURL.zuharIqama}</td>
  </tr>
  <tr>
    <td>Asar</td>
    <td>${namazURL.asarAzaan}</td>
    <td>${namazURL.asarIqama}</td>
  </tr>
  <tr>
    <td>Maghrib</td>
    <td>${namazURL.maghribAzaan}</td>
    <td>${namazURL.maghribIqama}</td>
  </tr>
  <tr>
    <td>Isha</td>
    <td>${namazURL.ishaAzaan}</td>
    <td>${namazURL.ishaIqama}</td>
  </tr>
  <tr>
    <td>Jumah</td>
    <td>${namazURL.jummahAzaan}</td>
    <td>${namazURL.jummahIqama}</td>
  </tr>
  <tr>
    <td>Eid ul Fitr</td>
    <td> - </td>
    <td>${namazURL.eidUlFitr}</td>
  </tr>
  <tr>
    <td>Eid ul Adha</td>
    <td> - </td>
    <td>${namazURL.eidUlAdha}</td>
  </tr>
</tbody>
</table>`


timings.innerHTML = timingsData
}

namazTimings()