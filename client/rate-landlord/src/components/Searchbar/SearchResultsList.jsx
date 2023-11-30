import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};
// export const SearchResultsList = ({ results }) => {
//   return (
//     <div className="list-group"> {/* Use Bootstrap's list-group */}
//       {results.map((result, id) => {
//         return (
//           <div
//             className="list-group-item list-group-item-action" // Apply Bootstrap's list-group-item classes
//             onClick={(e) => alert(`You selected ${result}!`)}
//             key={id}
//           >
//             {result}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
