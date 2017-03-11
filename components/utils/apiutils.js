
//get post lists info from api
export function getAllPosts(){
     var req = new Request("http://169.232.119.30:8000/api/posts?format=json", {method: 'GET'});
      
        return(fetch(req).then(function(res) {
            return res.json();
            }));
}