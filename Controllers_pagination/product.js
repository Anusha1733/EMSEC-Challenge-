//---------------------------> Anusha Patel <----------------------------


// Formula of Pagination 
let page  = Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 3;


let skip = (page -1)*limit;

// apiData = apiData.skip(skip).limit(limit);