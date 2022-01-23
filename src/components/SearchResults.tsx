import Loading from '@/assets/loading.svg';
import { userAtom } from "@/app";
import { useRecoilValue, useRecoilState } from "recoil";
import {searchResults} from "@/components/Searchbar";
import { showAtom } from "@/components/Searchbar";


export default function SearchResults({  loading }: {  loading: boolean}) {
  const results = useRecoilValue(searchResults);
  const setUser = useRecoilState(userAtom)[1];
  const [show, setShow] = useRecoilState(showAtom);

  return (
    <div id="search-results" className={show ? 'show' : 'hide' }>
      <Loading width="100px" id="loading-animation" className={loading ? 'show' : 'hide'} />
      <div id="results" className={loading ? 'hide' : 'show'}>
        {
          results.items.map((user) => {
            return (
              <div className="result" onClick={() => {
                fetch(`https://api.github.com/users/${user.login}`).then(res => res.json().then(res => setUser(res)));
                setShow(false);
              }}>
                <img src={user.avatar_url} alt={`Avatar Image for ${user.login}`} />
                <span className="user-name">{user.login}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}