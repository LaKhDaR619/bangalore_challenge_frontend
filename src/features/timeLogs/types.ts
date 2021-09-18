export type TimeLogRow = {
  startTime: Date;
  endTime: Date;
  description: string;
};

export type AddTimeLogForm = {
  startTime: Date | null;
  endTime: Date | null;
  description: string;
};
