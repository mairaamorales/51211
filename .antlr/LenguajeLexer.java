// Generated from c:/Users/Netbook/51211/proyecto/Lenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class LenguajeLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, PROGRAMA=3, PROCESAR=4, MANEJARERROR=5, IMPRIMIR=6, MAS=7, 
		MENOS=8, POR=9, DIVIDIR=10, LLAVEIZQ=11, LLAVEDER=12, LPAREN=13, RPAREN=14, 
		IGUAL=15, PUNTOYCOMA=16, LETRA=17, DIGITO=18, WS=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "PROGRAMA", "PROCESAR", "MANEJARERROR", "IMPRIMIR", "MAS", 
			"MENOS", "POR", "DIVIDIR", "LLAVEIZQ", "LLAVEDER", "LPAREN", "RPAREN", 
			"IGUAL", "PUNTOYCOMA", "LETRA", "DIGITO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'.'", "'_'", "'programa'", "'procesar'", "'manejarError'", "'imprimir'", 
			"'+'", "'-'", "'*'", "'/'", "'{'", "'}'", "'('", "')'", "'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "PROGRAMA", "PROCESAR", "MANEJARERROR", "IMPRIMIR", 
			"MAS", "MENOS", "POR", "DIVIDIR", "LLAVEIZQ", "LLAVEDER", "LPAREN", "RPAREN", 
			"IGUAL", "PUNTOYCOMA", "LETRA", "DIGITO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public LenguajeLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Lenguaje.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0013r\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0004\u0012m\b\u0012\u000b\u0012\f\u0012n\u0001\u0012\u0001"+
		"\u0012\u0000\u0000\u0013\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\u0001"+
		"\u0000\u0003\u0002\u0000AZaz\u0001\u000009\u0003\u0000\t\n\r\r  r\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0001\'\u0001\u0000\u0000\u0000\u0003)\u0001\u0000\u0000\u0000"+
		"\u0005+\u0001\u0000\u0000\u0000\u00074\u0001\u0000\u0000\u0000\t=\u0001"+
		"\u0000\u0000\u0000\u000bJ\u0001\u0000\u0000\u0000\rS\u0001\u0000\u0000"+
		"\u0000\u000fU\u0001\u0000\u0000\u0000\u0011W\u0001\u0000\u0000\u0000\u0013"+
		"Y\u0001\u0000\u0000\u0000\u0015[\u0001\u0000\u0000\u0000\u0017]\u0001"+
		"\u0000\u0000\u0000\u0019_\u0001\u0000\u0000\u0000\u001ba\u0001\u0000\u0000"+
		"\u0000\u001dc\u0001\u0000\u0000\u0000\u001fe\u0001\u0000\u0000\u0000!"+
		"g\u0001\u0000\u0000\u0000#i\u0001\u0000\u0000\u0000%l\u0001\u0000\u0000"+
		"\u0000\'(\u0005.\u0000\u0000(\u0002\u0001\u0000\u0000\u0000)*\u0005_\u0000"+
		"\u0000*\u0004\u0001\u0000\u0000\u0000+,\u0005p\u0000\u0000,-\u0005r\u0000"+
		"\u0000-.\u0005o\u0000\u0000./\u0005g\u0000\u0000/0\u0005r\u0000\u0000"+
		"01\u0005a\u0000\u000012\u0005m\u0000\u000023\u0005a\u0000\u00003\u0006"+
		"\u0001\u0000\u0000\u000045\u0005p\u0000\u000056\u0005r\u0000\u000067\u0005"+
		"o\u0000\u000078\u0005c\u0000\u000089\u0005e\u0000\u00009:\u0005s\u0000"+
		"\u0000:;\u0005a\u0000\u0000;<\u0005r\u0000\u0000<\b\u0001\u0000\u0000"+
		"\u0000=>\u0005m\u0000\u0000>?\u0005a\u0000\u0000?@\u0005n\u0000\u0000"+
		"@A\u0005e\u0000\u0000AB\u0005j\u0000\u0000BC\u0005a\u0000\u0000CD\u0005"+
		"r\u0000\u0000DE\u0005E\u0000\u0000EF\u0005r\u0000\u0000FG\u0005r\u0000"+
		"\u0000GH\u0005o\u0000\u0000HI\u0005r\u0000\u0000I\n\u0001\u0000\u0000"+
		"\u0000JK\u0005i\u0000\u0000KL\u0005m\u0000\u0000LM\u0005p\u0000\u0000"+
		"MN\u0005r\u0000\u0000NO\u0005i\u0000\u0000OP\u0005m\u0000\u0000PQ\u0005"+
		"i\u0000\u0000QR\u0005r\u0000\u0000R\f\u0001\u0000\u0000\u0000ST\u0005"+
		"+\u0000\u0000T\u000e\u0001\u0000\u0000\u0000UV\u0005-\u0000\u0000V\u0010"+
		"\u0001\u0000\u0000\u0000WX\u0005*\u0000\u0000X\u0012\u0001\u0000\u0000"+
		"\u0000YZ\u0005/\u0000\u0000Z\u0014\u0001\u0000\u0000\u0000[\\\u0005{\u0000"+
		"\u0000\\\u0016\u0001\u0000\u0000\u0000]^\u0005}\u0000\u0000^\u0018\u0001"+
		"\u0000\u0000\u0000_`\u0005(\u0000\u0000`\u001a\u0001\u0000\u0000\u0000"+
		"ab\u0005)\u0000\u0000b\u001c\u0001\u0000\u0000\u0000cd\u0005=\u0000\u0000"+
		"d\u001e\u0001\u0000\u0000\u0000ef\u0005;\u0000\u0000f \u0001\u0000\u0000"+
		"\u0000gh\u0007\u0000\u0000\u0000h\"\u0001\u0000\u0000\u0000ij\u0007\u0001"+
		"\u0000\u0000j$\u0001\u0000\u0000\u0000km\u0007\u0002\u0000\u0000lk\u0001"+
		"\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000"+
		"no\u0001\u0000\u0000\u0000op\u0001\u0000\u0000\u0000pq\u0006\u0012\u0000"+
		"\u0000q&\u0001\u0000\u0000\u0000\u0002\u0000n\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}