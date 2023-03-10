import Profile from './Profile/Profile';
import user from 'componentsInformation/user.json';

import Statistics from './Statistics/Statistics';
import data from 'componentsInformation/data.json';

import FriendList from './FriendList/FriendList';
import friends from 'componentsInformation/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'componentsInformation/transactions.json';

export const App = () => {
  return (
    <div className="App">
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
