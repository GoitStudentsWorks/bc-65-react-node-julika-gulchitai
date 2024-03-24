import { useSelector, useDispatch } from 'react-redux'; // Add this line
import { selectNotes } from '../../../redux/Water/selectors';
import { getLocaleTime } from '../../../services/getLocaleTime';
import { useState } from 'react';
import { ReactComponent as IconPlus } from '../../../assets/icon/plus-small.svg';

import {
  Edit,
  PortionsContainer,
  PortionsList,
  Volumes,
  Portion,
  Button,
  Time,
  StyledWatterAddBtn,
} from './PortionsListToday.styled';

import { ReactComponent as Icon } from '../../../assets/icon/glass.svg';
import { ReactComponent as IconPencil } from '../../../assets/icon/pencil-square.svg';
import { useTranslation } from 'react-i18next';
import TodayListModal from '../../TodayListModal/TodayListModal';
import ModalWindow from '../../ModalWindow/ModalWindow';
import EditWaterModal from '../../EditWaterModal/EditWaterModal';
import DeleteButton from '../DeleteButton/DeleteButton.jsx';
import { setEditModal } from '../../../redux/Water/WaterSlices.js';

const PortionsListToday = () => {
  const waterPortions = useSelector(selectNotes);
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [openModalTodayList, setOpenModalTodayList] = useState(false);
  const { t } = useTranslation();

  const handleOpenModalTodayAdd = (event) => {
    setOpenModalTodayList(true);
    setIsEditing(false);
    event.stopPropagation();
  };

  const handleOpenModalTodayEdit = (event, item) => {
    dispatch(
      setEditModal({
        isEditModalOpen: true,
        waterPortionId: item._id,
      })
    );
    setIsEditModalOpen(true);
    event.stopPropagation();
  };

  const handleCloseModalTodayList = () => {
    setOpenModalTodayList(false);
  };

  return (
    <PortionsContainer>
      {waterPortions.length > 0 && (
        <PortionsList>
          {waterPortions?.map((item) => (
            <Portion key={item._id}>
              <Icon className="glass" />
              <Volumes>{`${item.waterAmount} ${t('ml')}`} </Volumes>
              <Time>{getLocaleTime(item.date)}</Time>
              <Edit>
                <Button
                  onClick={(event) => handleOpenModalTodayEdit(event, item)}
                >
                  <IconPencil />
                </Button>
                {isEditModalOpen && (
                  <ModalWindow onClose={() => setIsEditModalOpen(false)}>
                    <EditWaterModal
                      waterPortionId={item._id}
                      onClose={() => setIsEditModalOpen(false)}
                    />
                  </ModalWindow>
                )}
                <DeleteButton id={item._id} />
              </Edit>
            </Portion>
          ))}
        </PortionsList>
      )}
      <StyledWatterAddBtn onClick={(event) => handleOpenModalTodayAdd(event)}>
        <IconPlus />
        {t('addWater')}
      </StyledWatterAddBtn>
      {openModalTodayList && (
        <ModalWindow
          $position={'center'}
          open={openModalTodayList}
          onClose={handleCloseModalTodayList}
        >
          <TodayListModal
            onClose={handleCloseModalTodayList}
            isEditing={isEditing}
          />
        </ModalWindow>
      )}
    </PortionsContainer>
  );
};
export default PortionsListToday;
