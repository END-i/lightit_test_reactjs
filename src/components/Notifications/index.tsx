import styled from 'styled-components';

import { ActionTypes, useDispatch, useStore } from 'context';
import type { Notification } from 'types';

const Wrapper = styled.div``;

export const addNotification = ({ type, title, text = '' }: Notification) => {
  const dispatch = useDispatch();

  dispatch({ type: ActionTypes.setNotifications, payload: { type, title, text } });
};
const Notifications = () => {
  const { notifications } = useStore();

  console.log('NOTIFICATIONS :>>', notifications);

  return (
    <Wrapper>
      {notifications.map((notification: any) => {
        <div>notification</div>;
      })}
    </Wrapper>
  );
};

export default Notifications;
