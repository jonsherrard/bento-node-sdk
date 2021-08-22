import {
  GuessGenderParameters,
  GuessGenderResponse,
  ValidateEmailParameters,
  ValidateEmailResponse,
} from './types';
import { BentoClient } from '../client';

export class BentoExperimental {
  private readonly _url = '/experimental';

  constructor(private readonly _client: BentoClient) {}

  /**
   * **EXPERIMENTAL** -
   * This functionality is experimental and may change or stop working at any time.
   *
   * Attempts to validate the email. You can provide additional information to further
   * refine the validation
   *
   * If a name is provided, it compares it against the US Census Data, and so the results
   * may be biased.
   *
   * @param parameter
   * @returns Promise<boolean>
   */
  public async validateEmail(
    parameters: ValidateEmailParameters
  ): Promise<boolean> {
    try {
      const result = await this._client.post<ValidateEmailResponse>(
        `${this._url}/validation`,
        parameters
      );

      return result.valid;
    } catch (error) {
      throw error;
    }
  }

  /**
   * **EXPERIMENTAL** -
   * This functionality is experimental and may change or stop working at any time.
   *
   * Attempts to guess the gender of the person given a provided name. It compares
   * the name against the US Census Data, and so the results may be biased.
   *
   * It is possible for the gender to be unknown if the system cannot confidently
   * conclude what gender it may be.
   *
   * @param parameter
   * @returns Promise<GuessGenderResponse>
   */
  public async guessGender(
    parameters: GuessGenderParameters
  ): Promise<GuessGenderResponse> {
    try {
      const result = await this._client.post<GuessGenderResponse>(
        `${this._url}/gender`,
        parameters
      );

      return result;
    } catch (error) {
      throw error;
    }
  }
}