const DATASET_URL = "https://demos.reactdatagrid.io/api/v1/contacts"

/* -------------------------- Deafult data yuklash -------------------------- */
export const loadData = async ({ skip, limit, sortInfo, groupBy, filterValue }) => {
  console.log(filterValue);
  let url = DATASET_URL + '?skip='+skip+'&limit='+limit+(groupBy && groupBy.length?'&groupBy='+groupBy:'')+'&sortInfo='+JSON.stringify(sortInfo) + '&filterBy='+JSON.stringify(filterValue)
  const res = await fetch(url)
    .then(response => {
      const totalCount = response.headers.get('X-Total-Count');
      return response.json().then(data => {
        return { data, count: totalCount * 1 };
      })
    })
    return res
}

/* --------------------------- Lokal data yuklash --------------------------- */
export function getAllClients({ skip, limit, sortInfo, groupBy, filterValue }) {
  const myHeaders = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer 635|cDLR309h39rNZUg3cV7SLrkhOHF4MMkKLXr2KknLc68d1ed7' });

  const res = fetch('http://10.100.104.125:4001/api/rents?page=1', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ branch_id: null, status: null, date: null, client_name: null })
  })
  .then(response => {
    if (response.status === 200) return response.json();
    else throw new Error('Something went wrong on api server!');
  })
  .then(response => ({ data: response.resoult.data.data }) )
  .catch(error => console.log(error));

  return res
}



/* ------------------------- Rowni shartli styelash ------------------------- */
export const rowStyle = ({ data }) => {
    const colorMap = { ca: '#7986cb', uk: '#ef9a9a' }
    return {
      color: data.ermissionToCall && colorMap["ca"]
    }
  }
 
export const shouldComponentUpdate = () => true;  


