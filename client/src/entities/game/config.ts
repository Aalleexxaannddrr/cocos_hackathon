export enum EStatuses {
    finished = 'finished',
    will = 'will',
    comming = 'comming',
}

export const gameStatuses: Record<EStatuses, string> = {
    [EStatuses.finished]: 'матч окончен',
    [EStatuses.will]: 'матч предстоит',
    [EStatuses.comming]: 'матч идет',
};
