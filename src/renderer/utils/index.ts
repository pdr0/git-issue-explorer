export function getIssueNumber(url: string): string {
    const regex = /\/issues\/(\d+)$/;
    const match = url.match(regex);
    const issueNumber = match ? match[1] : '';
    return issueNumber
}
