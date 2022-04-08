import Instagram from 'instagram-web-api';


export default function Instagrid({ posts }) {

    return  (<div>
    
    <h1>Instagram Posts</h1>
            <ul>
                {posts.map(({ node }, i) => {
                    return (
                        <li key={i}>
                            <img src={node.display_resources[0].src} />
                            <p>{node.edge_media_to_caption.edges[0]?.node.text}</p>
                        </li>
                    );
                })}
            </ul>
</div>
);
}


export async function getStaticProps(context) {
    
        const client = new Instagram({ 
            username: 'sz.tudio',
             password: 'henricz94'
            });

            let photos = []
            try {
                // attempt to log in to Instagram
                await client.login()

                const instagram = await client.getPhotosByUsername({
                    username: 'sz.tudio',
                  })
                  
              
                  if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
                    // if we receive timeline data back
                    //  update the posts to be equal
                    // to the edges that were returned from the instagram API response
                    photos = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
                  }

              } catch (err) {
                // throw an error if login to Instagram fails
                console.log("Something went wrong while logging into Instagram", err)
              }
    
        
    
        return {
            props: {
                posts: photos,
            }, // will be passed to the page component as props
        };
    }
