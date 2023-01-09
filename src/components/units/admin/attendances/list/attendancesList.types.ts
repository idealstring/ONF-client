import { Dispatch, SetStateAction } from 'react';
import {
  Control,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { Dayjs } from 'dayjs';
import {
  IQuery,
  ISchedule,
} from '../../../../../commons/types/generated/types';
import { InputData } from '../../../../commons/input/select01';

export interface IAttendancesListPresenterProps {
  isOpen: boolean;
  aniMode: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setAniMode: Dispatch<SetStateAction<boolean>>;
  onClickOpenModal: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: (data: any) => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues, any>;
  setOrganizationArr: Dispatch<SetStateAction<InputData[]>>;
  organizationsData?: InputData[];
  onChangeStartEndDate: (
    dates: null | Array<Dayjs | null>,
    dateString: string[],
  ) => void;
  data?: Pick<IQuery, 'fetchListTypeSchedule'>;
  onCheckedAll: (checked: boolean) => void;
  onCheckedElement: (checked: boolean, selectedTarget: ISchedule) => void;
  checkedList: ISchedule[];
  isOptionOpen: boolean;
  onClickDeleteChecked: () => void;
}